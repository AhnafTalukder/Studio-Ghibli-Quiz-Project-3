import styled from 'styled-components'

export const FormStyle = styled.div`

*{
    padding: 0px;
    margin: 0px;
}
.form-container img{
    width: 700px;
    height: 500px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 2px 2px 10px black;
}

.form-container h1{
    font-size: 40px;
    line-height:1;
    font-family: 'Lalezar', cursive;
    color:#023E97;
}

.form-container h3{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

form{
    display: flex;
}

.form-container input{
   
    padding: 20px; /* Increase padding for a larger input */
    width: 70%; /* Make the input full-width */
    margin: 10px;
    height: 40px; /* Increase the height */
    font-size: 30px; /* Increase font size */
    border: 2px solid #ccc;
    border-radius: 10px; /* Rounded edges */
    outline: none;
    transition: border-color 0.3s ease-in-out;
}

.form-container button {
    width: 30%;
    margin: 10px;
    font-size: 30px;
  

  background-color: #007bff; /* Blue color for the button */
  border: none;
  border-radius: 10px; /* Rounded edges */
  color: #fff; /* Text color */
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

/* Add hover effect for both input and button */

button:hover {
  border-color: #007bff; /* Highlight the border color on hover */
  background-color: #0056b3; /* Darker blue on hover */
}

`