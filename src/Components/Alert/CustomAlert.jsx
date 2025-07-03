'use client';

import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

const CustomAlert = ({ type = 'info', message = '', onClose = () => {} }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (message && type) {
      setOpen(true);
      const timer = setTimeout(() => {
        setOpen(false);
        onClose(); // Optional callback
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, type, onClose]);

  return (
    <Snackbar
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      TransitionComponent={(props) => <Slide {...props} direction="right" />}
    >
      <Alert variant="filled" severity={type} onClose={() => setOpen(false)} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
