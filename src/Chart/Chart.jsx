import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'
import DarkMode from "../DarkMode/DarkMode";


const data = [
  {
    name: 'प्रचार प्रसार सम्बन्धी',
    'अहिलेसम्मको गुनासो': 4, 
    'आजको गुनासो': 0,
  },
  {
    name: 'इन्जिनियरिङ सेवा',
    'अहिलेसम्मको गुनासो': 1, 
    'आजको गुनासो': 0,
  },
  {
    name: 'उपचार सम्बन्धी',
    'अहिलेसम्मको गुनासो': 0, 
    'आजको गुनासो': 0,
  },
  {
    name: 'खाध्यान्न सम्बन्धी',
    'अहिलेसम्मको गुनासो': 0, 
    'आजको गुनासो': 0,
  },
  {
    name: 'अन्य',
    'अहिलेसम्मको गुनासो': 0, 
    'आजको गुनासो': 0,
  },
];

export class Chart extends Component {
  render() {
    return (
      <>
      
      {/* <div className="Chart-main">
        <h2>गुनासोहरुको स्थिति</h2> 
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="अहिलेसम्मको गुनासो" fill="#8884d8" />
            <Bar dataKey="आजको गुनासो" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div> */}
      </>
    );
  }
}

export default Chart;