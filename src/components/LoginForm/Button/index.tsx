import React from 'react';
import { Button, Text, IButtonProps } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

interface ButtonLoginFormProps extends IButtonProps {
  icon?: 'github' | 'google';
  btnText: string;
  onpress: () => void;
  showIcon?: boolean;
}

export default function ButtonLoginForm({
  btnText,
  icon,
  onpress,
  showIcon = true,
  ...rest
}: ButtonLoginFormProps) {
  return (
    <Button
      w="80%"
      bgColor="secondary"
      py="16px"
      leftIcon={
        showIcon ? <AntDesign name={icon} size={32} color="white" /> : undefined
      }
      onPress={onpress}
      testID="button-login-form"
      {...rest}
    >
      <Text fontSize="16px" fontWeight="600" color="white" ml="16px">
        {btnText}
      </Text>
    </Button>
  );
}
