import { memo } from 'react';
import { styled } from 'styled-components'

const StyledCheckBox = styled.div`
 flex-shrink: 1;
 width: fit-content;
 input {
        appearance: none;
        border: 1px solid #4653e3;
        border-radius: 9999px;
        width: 24px;
        height: 24px;
        cursor: pointer;
        transition: 0.3s;
        &:checked {  
          background-color: #4653e3;
          border: transparent;      
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
          background-size: 100% 100%;
          background-position: 50%;
          background-repeat: no-repeat;
          background-color: #4653e3;
        }
      }
`

const CheckBox = ({item,onClick}) => {
  const { isCompleted } = item;
  

  return (
    <StyledCheckBox>
      <input type="checkbox" onClick={onClick} defaultChecked={isCompleted} />
    </StyledCheckBox>
  )
}

export default memo(CheckBox);