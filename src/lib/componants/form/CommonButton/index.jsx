import { Button } from '@mui/material';

const CommonButton = ({
  onClick,
  type = 'button',
  variant = 'text',
  className,
  children
}) => {
  const buttonStyles = {
    textTransform: 'none',  
    ...(variant === 'contained' && {
      color: '#ffffff',
      '&:hover': {
        color: '#ffffff',
        backgroundColor: '#0d91bd',
      }
    })
  };

  return (
    <Button
      onClick={onClick}
      type={type}
      variant={variant}
      className={className}
      sx={buttonStyles}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
