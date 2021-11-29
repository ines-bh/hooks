// import { Rate } from 'antd';

import React from "react";

import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

// const desc = ["terrible", "bad", "normal", "good", "wonderful"];

// class Rater extends React.Component {
//   state = {
//     value: this.props.movie.StarRating,
//   };

//   handleChange = (value) => {
//     this.setState({ value });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <span>
//         <Rate tooltips={desc} onChange={this.handleChange} value={value} />
//         {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ""}
//       </span>
//     );
//   }
// }

function Rater({ movie }) {
  return (
    <div>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          defaultValue={movie}
          precision={0.5}
          readOnly
        />
      </Stack>
    </div>
  );
}
export default Rater;
