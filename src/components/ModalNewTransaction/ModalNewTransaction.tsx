import {Image, ModalProps} from 'react-native';

import {
  ModalTransaction,
  BackgroundOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  ModalButtonClose,
  ModalButtonCloseLabel,
  ModalInput,
  ModalContainerCategory,
  ModalCategory,
  ModalCategoryLabel,
  ModalButtonNewTransaction,
  ModalButtonNewTransactionLabel,
} from './ModalNewTransaction.styles';

const icons = {
  entrada: require('../../assets/icon-entry-value.png'),
  saida: require('../../assets/icon-output.png'),
};

interface ModalNewTransactionProps extends ModalProps {
  onClose: () => void;
  setName: (name: string) => void;
  setPrice: (price: string) => void;
  setCategory: (category: string) => void;
  onSubmite: () => void;
}

export function ModalNewTransaction({
  onClose,
  setName,
  setPrice,
  setCategory,
  onSubmite,
  ...rest
}: ModalNewTransactionProps) {
  return (
    <ModalTransaction transparent {...rest}>
      <BackgroundOverlay>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>Cadastrar transação</ModalTitle>
            <ModalButtonClose onPress={() => onClose()}>
              <ModalButtonCloseLabel>x</ModalButtonCloseLabel>
            </ModalButtonClose>
          </ModalHeader>
          <ModalInput placeholder="Nome" onChangeText={setName} />

          <ModalInput
            placeholder="Preço"
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <ModalContainerCategory>
            <ModalCategory>
              <Image source={icons.entrada} />
              <ModalCategoryLabel>Income</ModalCategoryLabel>
            </ModalCategory>

            <ModalCategory>
              <Image source={icons.saida} />
              <ModalCategoryLabel>Outcome</ModalCategoryLabel>
            </ModalCategory>
          </ModalContainerCategory>

          <ModalInput placeholder="Categoria" onChangeText={setCategory} />

          <ModalButtonNewTransaction onPress={() => onSubmite()}>
            <ModalButtonNewTransactionLabel>
              Cadastrar
            </ModalButtonNewTransactionLabel>
          </ModalButtonNewTransaction>
        </ModalContainer>
      </BackgroundOverlay>
    </ModalTransaction>
  );
}
