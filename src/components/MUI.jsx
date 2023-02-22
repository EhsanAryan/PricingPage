import { Button, FormControlLabel, IconButton, Switch } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import CustomAvatar from './customized-components/CircleAvatar';
import CustomBadge from './customized-components/CustomBadge';
import CustomSwitch from './customized-components/CustomSwitch';
import CutsomButton from './customized-components/CutsomButton';

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  & :is(button, label) {
    margin-top: 10px;
  }
`;

const MUI = () => {
  return (
    <Div>
      {/* <Button variant="text" color="info" size="large">Text Button</Button>
            <Button variant="contained" color="info" size="large">Contained Button</Button>
            <Button variant="outlined" color="info" size="large">Outlined Button</Button>
            <Button disabled>Disabled Button</Button>
            <Button variant="contained" href="https://google.com" target="_blank">
              Link
            </Button>
            <Button variant="contained" color="action" component="label">
              Upload
              <input type="file" hidden />
            </Button> */}

      {/* <CustomAvatar
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
        width="200px"
      /> */}

      {/* <CustomBadge
      backgroundColor="#eae8fd"
      color="#7367f0"
      >
        Save up to 10%
      </CustomBadge> */}

      {/* <Button variant="contained" color="secondary" className="px-5 my-2 btn btn-secondary"
      href="https://google.com" target="_blank" component="a">
        Upgrade
      </Button>

      <Button variant="contained" color="primary" className="px-5 my-2 btn btn-primary"
      href="https://google.com" target="_blank" component="a">
        Upgrade
      </Button> */}

      {/* <CustomSwitch 
      leftLabel="Monthly"
      rightLabel="Annual"
      id="time-range-switch"
      switchColor="secondary"
      /> */}

      {/* <CutsomButton
      backgroundColor={"purple"}
      color="white"
      hoverBackgroundColor={"#45006f"}
      >
        Upgrade
      </CutsomButton>
      
      <CutsomButton
      backgroundColor="#7367f0"
      color="#fff"
      >
        Upgrade
      </CutsomButton>

      <CutsomButton
      backgroundColor="#e9e7fd"
      color="#7367f0"
      fontSize="1.2rem"
      >
        Upgrade
      </CutsomButton>

      <CutsomButton
      backgroundColor="#e9e7fd"
      color="#7367f0"
      fontSize="1.2rem"
      hoverBackgroundColor="#dcd9d9"
      hoverColor="#7367f0"
      href="https://google.com"
      >
        Upgrade
      </CutsomButton> */}

      <Button variant="contained" color='secondary' href="#" className='btn btn-secondary'>
        Upgrade
      </Button>
      <CutsomButton
      backgroundColor="#9c27b0"
      color="#fff"
      hoverBackgroundColor="#851e97"
      fontWeight="normal"
      href="#"
      >
        Upgrade
      </CutsomButton>

    </Div>
  );
}

export default MUI;
