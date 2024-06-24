/* eslint-disable react/prop-types */
// import "./ScrollableTable.css";

// const ScrollableTable = ({ data }) => {
//   return (
//     <div className="table-container">
//       <div className="fixed-column">
//         {data.map((row, index) => (
//           <div key={index} className="table-cell">
//             {row[0]}
//           </div>
//         ))}
//       </div>
//       <div className="scrollable-columns">
//         {data.map((row, index) => (
//           <div key={index} className="table-row">
//             {row.slice(1).map((cell, cellIndex) => (
//               <div key={cellIndex} className="table-cell">
//                 {cell}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollableTable;

import "./ScrollableTable.css";

const ScrollableTable = ({ data }) => {
  return (
    <div className="table-wrapper">
      <div className="table-container">
        <div className="scrollable-container">
          <div className="fixed-column">
            {data.map((row, index) => (
              <div key={index} className="table-cell">
                {row[0]}
              </div>
            ))}
          </div>

          <div className="scrollable-columns">
            {data.map((row, index) => (
              <div key={index} className="table-row">
                {row.slice(1).map((cell, cellIndex) => (
                  <div key={cellIndex} className="table-cell">
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableTable;
