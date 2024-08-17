import React, { useState } from 'react';
import Excel from 'exceljs';

const Index = () => {
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const wb = new Excel.Workbook();
    const reader = new FileReader();
    
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const buffer = reader.result;
      wb.xlsx.load(buffer).then((workbook) => {
        const tempData = [];
        workbook.eachSheet((sheet, id) => {
          sheet.eachRow((row, rowIndex) => {
            tempData.push(row.values);
          });
        });
        setData(tempData);
      });
    };
  };

  return (
    <div>
      <div>Upload Excel File</div>
      <input type="file" onChange={handleChange} />
      
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              {data[0].map((_, index) => (
                <th key={index}>Column {index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

Index.propTypes = {};
Index.defaultProps = {};

export const Files = () => {
  return (
    <div>
      Files
      <Index />
    </div>
  );
};
