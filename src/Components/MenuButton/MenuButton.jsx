import React from 'react';
import { DefaultButton, mergeStyles } from '@fluentui/react';

const classes = {
  buttonHeight: mergeStyles({
    width: '16.9vw',
    height: '48px',
    selectors: {
      '.ms-Button-menuIcon': { fontSize: '20px' }
    }
  })
}
const MenuButton = (props) => {
  const { buttonLabel, menuProps } = props;
  return (
    <DefaultButton
      primary
      split
      menuProps={{
        items: menuProps
      }}
      className={`${classes.buttonHeight} ms-fontSize-14`}
    >
      {buttonLabel}
    </DefaultButton>
  )

}

export default MenuButton;