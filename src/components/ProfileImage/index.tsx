import React from 'react';
import { Image } from 'native-base';

export function ProfileImage() {
  return (
    <Image
      source={{ uri: 'https://avatars.githubusercontent.com/u/61670495?v=4' }}
      alt="Profile image"
      size={12}
      borderRadius="50px"
      testID="profile-image"
    />
  );
}
