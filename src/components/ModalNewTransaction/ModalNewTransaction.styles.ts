import styled from 'styled-components/native';

export const ModalTransaction = styled.Modal``;

export const BackgroundOverlay = styled.View`
  flex: 1;
  justify-content: flex-end;

  background: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.View`
  padding: 0 24px;
  padding-top: 24px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  background-color: #fff;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 24px;
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #363f5f;
`;

export const ModalButtonClose = styled.TouchableOpacity``;

export const ModalButtonCloseLabel = styled.Text`
  font-size: 27px;
  font-weight: 400;
  line-height: 33px;
  color: #363f5f;
`;

export const ModalInput = styled.TextInput`
  width: 100%;
  height: 56px;

  padding: 18px 16px;

  border-radius: 5px;
  border-width: 1px;
  border-color: #d7d7d7;

  margin-bottom: 8px;

  background-color: #e7e9ee;
`;

export const ModalContainerCategory = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  margin-bottom: 8px;
`;

export const ModalCategory = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 56px;

  border-radius: 5px;
  border-width: 1px;
  border-color: #d7d7d7;

  background-color: #ffffff;
`;

export const ModalCategoryLabel = styled.Text`
  margin-left: 18px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #363f5f;
`;

export const ModalButtonNewTransactionLabel = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #fff;
`;

export const ModalButtonNewTransaction = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;

  border-radius: 5px;

  margin: 24px 0;
  background-color: #33cc95;
`;
