import styled from "styled-components";
import { rem } from "polished";

const StyledForm = styled.section`
  .formWrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: ${rem("600px")};
    padding: ${rem("20px")};

    .contactInput {
      margin-bottom: ${rem("20px")};
      width: 100%;

      textarea {
        width: 100%;
      }
    }

    .textAreaWrapper {
      label {
        color: ${props => props.theme.colors.formTextColor};
      }
      textarea {
        resize: none;
        min-height: ${rem("180px")};
        background: none;
        outline: none;
        color: ${props => props.theme.colors.formTextColor};
      }

      .text-left {
        color: ${props => props.theme.colors.formTextColor};
      }

      .error {
        color: ${props => props.theme.colors.error};
      }
      .errorTextarea {
        border: 1px solid ${props => props.theme.colors.error};
      }
    }
  }

  label + .MuiInput-formControl {
    padding: 10px 10px 7px 0;
  }
`;

export default StyledForm;
