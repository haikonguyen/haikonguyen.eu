import styled from "styled-components";

const StyledForm = styled.section`
  .formWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 600px;
    padding: 20px;

    .contactInput {
      margin-bottom: 20px;
      width: 100%;

      textarea {
        width: 100%;
      }
    }

    .textAreaWrapper {
      label {
        color: rgba(255, 255, 255, 0.7);
      }
      textarea {
        resize: none;
        min-height: 180px;
        background: none;
        color: white;
        outline: none;
      }
    }
  }

  label + .MuiInput-formControl {
    padding: 10px 10px 7px 0;
  }
`;

export default StyledForm;
