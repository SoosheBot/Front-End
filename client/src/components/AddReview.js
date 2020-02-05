import React, { useState } from "react";
// import { useForm } from "react-hook-form";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import styled from "styled-components";
<<<<<<< HEAD
import LogIn from '../images/LogIn.png';
import useForm from '../utils/useForm';
import validate from '../utils/AddReviewValidationRules';

const StyledAddReview = styled.div`
margin-top: 8%;
=======
import LogIn from "../images/LogIn.png";
// import useForm from '../utils/useForm';
// import validate from '../utils/AddReviewValidationRules';

const StyledAddReview = styled.div`
  margin-top: 8%;
>>>>>>> 42abaa8ae08ac2813831d4e6a7a3cca035119a1e
  height: 80vh;
  color: #e8964a;
  display: block;
  width: 80%;
  margin: 2rem auto;

  form {
    width: 70%;
    margin: 1% auto 2% auto;
    padding: 3rem 1rem;
    border-radius: 5rem;

    ::before {
      background-image: url(${LogIn});
      background-size: cover;
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      opacity: 0.8;
    }

    input[type="text"],
    input[type="number"] {
      border: 1px solid #e76e3c;
      border-radius: 5px;
      width: 80%;
      display: block;
      margin: 1rem auto 2rem auto;
      padding: 0.8rem 0;
    }

    label {
      display: block;
      width: 80%;
      margin: 2rem auto;
    }

    .submit {
      width: 80%;
      padding: 0.5rem 1rem;
      background-color: #c45228;
      border-radius: 5px;
      color: white;
      font-weight: bold;
      border: 1px solid #e76e3c;

      &:hover {
        background-color: #e8964a;
        border: 1px solid #e76e3c;
        color: #181212;
        font-weight: bold;
      }
    }
  }
  p {
    color: black;
    background-color: white;
    width: 50%;
    margin: 0 auto;
    padding: 1rem;
  }

  a {
    color: #e8964a;
    text-decoration: none;

    &: hover {
      text-decoration: underline;
    }
  }
`;

<<<<<<< HEAD
    const submitForm = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('api/reviews')
        .then(res => {
          localStorage.setItem("token", res.data.payload);
          props.history.push("/dashboard");
        })
        .catch(err => {
          console.log("add Review error", err);
=======
const AddReview = props => {
  // console.log("props", props);

  const [review, setReview] = useState({
    menu_item: "",
    item_price: "",
    item_rating: "",
    item_review: "",
    restaurant_id: "",
    item_image_url:'',
    date_visited: ""
  });

  // console.log('review', review);

  const handleChange = e => {
    setReview({ ...review, [e.target.name]: e.target.value });
    console.log("handleChange is firing");
  };

  const submitForm = e => {
    e.preventDefault();
    console.log("submitForm firing");
    axiosWithAuth()
      .post("api/reviews", review)
      .then(res => {
        console.log("is posting", res);
        setReview({
          ...review,
          menu_item: "",
          item_price: "",
          item_rating: "",
          item_review: "",
          restaurant_id: "",
          item_image_url:'',
          date_visited: ""
>>>>>>> 42abaa8ae08ac2813831d4e6a7a3cca035119a1e
        });
        props.history.push("/dashboard");
      })
      .catch(err => {
        console.log("add Review error", err);
      });
  };
<<<<<<< HEAD
  
  export default AddReview;


  
    // const [review, setReview] = useState({
    //   menu_item: "",
    //   item_price: "",
    //   item_rating: "",
    //   item_review: "",
    //   restaurant_id: '',
    //   date_visited: ''
    // });
  
    // const handleChange = e => {
    //   setReview({ ...review, [e.target.name]: e.target.value });
    // };

  //old addreview2 code
// export default function AddReview(props) {
//     const [review, setReview] = useState({
//         menu_item: "",
//         item_price: "",
//         item_rating: "",
//         item_review: "",
//         restaurant_id: '',
//         date_visited: ''
//       });
//     const { register, handleSubmit, errors } = useForm();
//     const onSubmit = data => console.log(data);
//     console.log(errors);

//     const handleChange = e => {
//         setReview({ ...review, [e.target.name]: e.target.value });
//       };
    
//       const submitForm = e => {
//         e.preventDefault();
//         axiosWithAuth()
//           .post('api/reviews')
//           .then(res => {
//             setReview({...review, 
//               menu_item: "",
//               item_price: "",
//               item_rating: "",
//               item_review: "",
//               restaurant_id: '',
//               date_visited: ''
//             } )
//             // localStorage.setItem("token", res.data.payload);
//             props.history.push("/dashboard");
//           })
//           .catch(err => {
//             console.log("add Review error", err);
//           });
//       };

//   return (
//     <StyledAddReview>
//         <h1>Add a new Review</h1>
//     <form onSubmit={handleSubmit(submitForm)}>
//       <input
//       type="text" 
//       placeholder="Add menu item" 
//       name="add_menu_item" 
//       ref={register({required: true, maxLength: 20})} 
//       />
//       {errors.menu_item && 'Menu item is required'}
//       <input 
//       type="number" 
//       placeholder="Price"
//       name="price" 
//       ref={register({required: true, max: 100, min: 0, maxLength: 5})} 
//       />
//       {errors.item_price && 'Price is required'}<input 
//       type="number" 
//       placeholder="restid"
//       name="restaurant_id" 
//       ref={register({required: true, max: 10, min: 0, maxLength: 2})} 
//       />
//       {errors.restaurant_id && 'Restaurant id is required'}
//       <input 
//       type='number'
//       placeholder='put your rating here...'
//       name="rating" 
//       ref={register({required: true, max: 5, min: 1})}/>
//       {errors.item_rating && 'a Rating is required'}
//       <input
//       type='text'
//       name="review_description" 
//       placeholder='Provide a short review here...'
//       ref={register({required: true, minLength: 10, maxLength: 500})}
//       />
//       {errors.item_review_description && 'a Review is required'}
//       <input 
//       type="date" 
//       placeholder="Date"
//       name="date_visited" 
//       ref={register({required: true, max: 100, min: 0, maxLength: 20})} 
//       />
//       {errors.date_visited && 'Date is required'}
      
//       <input className='submit' type="submit" />
       
//     </form>
//     </StyledAddReview>  
//   );
// }
=======

  return (
    <StyledAddReview>
      <h1>Add a new Review</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Add menu item"
          name="menu_item"
          value={review.menu_item}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="item_price"
          value={review.item_price}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="restid"
          name="restaurant_id"
          value={review.restaurant_id}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="put your rating here..."
          name="item_rating"
          value={review.item_rating}
          onChange={handleChange}
        />
        <input
          type="text"
          name="item_review"
          placeholder="Provide a short review here..."
          value={review.item_review}
          onChange={handleChange}
        />
        <input type='text'
        name='item_image_url'
        placeholder='Add image URL...'
        value={review.item_image_url}
        onChange={handleChange}
        />
        <input
          type="date"
          placeholder="Date"
          name="date_visited"
          value={review.date_visited}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </StyledAddReview>
  );
};

export default AddReview;

>>>>>>> 42abaa8ae08ac2813831d4e6a7a3cca035119a1e
//Old AddReview code
// import React, { useState } from 'react';
// import { axiosWithAuth } from '../utils/axiosWithAuth'

// //Name, ID, Cuisine, Menu item name, price, rating of menu item, short review of menu item.

// import styled from "styled-components";
// import LogIn from '../images/LogIn.png';

// const StyledAddReview = styled.div`
// margin-top: 8%;
//   height: 80vh;
//   color: #e8964a;
//   display: block;
//   width: 80%;
//   margin: 2rem auto;

// form {
//     width: 70%;
//     margin: 1% auto 2% auto;
//     padding: 3rem 1rem;
//     border-radius: 5rem;

//     ::before {
//         background-image: url(${LogIn});
//         background-size: cover;
//         content: "";
//         display: block;
//         position: absolute;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         z-index: -2;
//         opacity: 0.8;
//       }

//       input[type="text"],
//       input[type="number"] {
//         border: 1px solid #e76e3c;
//         border-radius:5px;
//         width: 80%;
//         display: block;
//         margin: 1rem auto 2rem auto;
//         padding: 0.8rem 0;
//       }

//       label {
//         display: block;
//         width: 80%;
//         margin: 2rem auto;
//       }

//       button {
//         width: 50%;
//         padding: 1rem;
//         background-color: #c45228;
//         border-radius:5px;
//         color: white;
//         font-weight:bold;
//         border: 1px solid #e76e3c;

//         &:hover{
//           background-color: #e8964a;
//           border: 1px solid #e76e3c;
//           color: #181212;
//           font-weight:bold;
//         }
//       }
//     }
//     p {
//         color: black;
//         background-color: white;
//         width: 50%;
//         margin: 0 auto;
//         padding: 1rem;
//       }

//       a {
//         color: #e8964a;
//         text-decoration: none;

//         &: hover {
//           text-decoration: underline;

//         }
//       }

// `;

// const AddReview = props => {
//   const [review, setReview] = useState({
//     menuItem: "",
//     price: "",
//     rating: "",
//     reviewDesc: ""
//   });

//   const handleChange = e => {
//     setReview({ ...review, [e.target.name]: e.target.value });
//   };

//   const submitForm = e => {
//     e.preventDefault();
//     axiosWithAuth()
//       .post()
//       .then(res => {
//         localStorage.setItem("token", res.data.payload);
//         props.history.push("/protected");
//       })
//       .catch(err => {
//         console.log("add Review error", err);
//       });
//   };

//   return (
//     <StyledAddReview>
//     <div className="addReview-form">
//          <h1>Add a new Review</h1>
//         <form onSubmit={submitForm}>
//           <input
//             type="text"
//             className="MenuName"
//             placeholder="Enter Menu item name..."
//             value={review.menuItem}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             className="enter price"
//             placeholder="Enter price..."
//             value={review.price}
//             onChange={handleChange}
//           />
//           <input
//             type="number"
//             className="rating"
//             placeholder="Enter rating..."
//             value={review.rating}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             className="reviewDescription"
//             placeholder="Enter a short review..."
//             value={review.reviewDesc}
//             onChange={handleChange}
//           />
//           <button type="submit">Add Review</button>
//         </form>
//     </div>
//     </StyledAddReview>
//   );
// };

// export default AddReview;
