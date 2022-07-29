import styled from "styled-components";

export const Wrapper = styled.main`
  
  max-width: 70rem;
  margin: 1.5rem 0;
  padding: 0 1rem;
  
  display: grid;
  grid-template-columns: 256px 1fr;
  gap: 1rem;
  align-items: flex-start;
  
  
  @media (max-width:768px) {
  html {
    font-size: 87.5%
  }

  {
    grid-template-columns: 1fr;
  }
}

  


//aside 

  aside { background: var(--pink-200);
  border-radius: 2px;
  overflow: hidden;
  padding: 0.5rem 0rem;
}
  

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .profile img {
    width: 4rem;
    height: 4rem;
    border-radius: 8px;
    object-fit: cover;
    box-sizing: initial;
    
  }

  .profile strong {
    padding-top: 0.5rem;
  }
 .profile form {
    display: flex;
    flex-direction: column;
    align-items: center;
 }
 .profile input {
    width: 100%;
    padding: 0.75rem;
    border-radius: 2px;
    border: none;
    font-size: 1rem;
    margin: 0.25rem;
    background: var(--pink-100);
    color: var(--green-800);
    line-height: 1rem;
    grid-row-start: 1;
    
    
  }

  .profile select {
    width: 100%;
    padding: 0.75rem;
    border-radius: 2px;
    border: none;
    background: var(--pink-100);
    margin: 0.25rem;
    color: var(--green-800);
  }

  .profile button {
    padding: 0.75rem 4.5rem;
    margin: 0.5rem 0rem;
    background-color: var(--green-800);
    color : var(--pink-100);
    border-radius: 2px;
    border: 0;
    transition: background-color 0.2s;
    
    cursor: pointer;

    :hover {
      background-color: var(--green-600);
    }

  }

`