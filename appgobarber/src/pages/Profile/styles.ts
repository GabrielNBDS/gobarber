import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  padding: 10px 30px ${Platform.OS === 'android' ? 30 : 30}px;
  flex: 1;
  justify-content: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
`;

export const UserAvatarButton = styled.TouchableOpacity`
  margin-top: 16px;
`;

export const UserAvatar = styled.Image`
  width: 144px;
  height: 144px;
  border-radius: 72px;
  align-self: center;
`;
