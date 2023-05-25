import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const ErrorMaterialUI = () => {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        InValid Credentials.
      </Alert>
    </div>
  );
};

export default ErrorMaterialUI;
