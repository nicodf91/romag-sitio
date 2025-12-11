import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const EfficiencyChart: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const data = [
      { name: 'Hogar Abierto', value: 15, color: '#9CA3AF' },
      { name: 'Estufa Común', value: 40, color: '#6A6A6A' },
      { name: 'Estufa Romag', value: 85, color: '#FC7B1D' },
    ];

    const margin = { top: 20, right: 30, bottom: 40, left: 90 };
    const width = 400 - margin.left - margin.right;
    const height = 200 - margin.top - margin.bottom;

    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // X axis
    const x = d3.scaleLinear()
      .domain([0, 100])
      .range([0, width]);
    
    svg.append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleBand()
      .range([0, height])
      .domain(data.map(d => d.name))
      .padding(.1);
    
    svg.append("g")
      .call(d3.axisLeft(y));

    // Bars
    svg.selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0) )
      .attr("y", d => y(d.name)!)
      .attr("width", d => x(d.value))
      .attr("height", y.bandwidth() )
      .attr("fill", d => d.color);

    // Labels
    svg.selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("x", d => x(d.value) + 5)
      .attr("y", d => y(d.name)! + y.bandwidth() / 2 + 5)
      .text(d => `${d.value}%`)
      .attr("fill", "#1F2937")
      .style("font-size", "12px")
      .style("font-weight", "bold");

    // Title
    svg.append("text")
      .attr("x", width / 2)
      .attr("y", -5)
      .attr("text-anchor", "middle")
      .style("font-size", "14px")
      .style("font-weight", "bold")
      .text("Eficiencia Calórica Comparativa");

  }, []);

  return (
    <div className="w-full flex justify-center bg-white p-4 rounded-lg shadow-sm">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default EfficiencyChart;