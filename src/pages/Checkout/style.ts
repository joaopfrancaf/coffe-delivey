import { styled } from "../../styles/stitches.config";

export const DivCheckoutContainer = styled('div', {

})

export const DivCheckoutSeuPedidoContainer = styled('div', {

    h2: {
        marginTop: '1.5rem',
        marginBottom: '1rem'
    }
})

export const DivCheckoutSeuPedido = styled('div', {
    backgroundColor: '$--base---card',
    width: '40rem',
    height: '23.25rem',
    borderRadius: 6,
    
    padding: 40 

})

export const DivCheckoutSeuPedidoEndereco = styled('div', {
    display: 'flex',
    lineHeight: '130%',
    marginBottom: '2rem',

    span: {
        fontSize: '1.2rem',
    },

    div: {
        marginLeft: '0.5rem'
    }
})

export const DivForm = styled('form', {
    display: 'flex',
    flexWrap: 'wrap',

    gap: '1rem'
})

export const InputStyled = styled('input', {
    padding: 12,
    backgroundColor: '$--base---input',
    border: '1px solid #E6E5E5',
    borderRadius: 4,
})

export const DivPagamento = styled ('div', {
    marginTop: '1rem',
    backgroundColor: '$--base---card',
    height: '12rem',
    width: '40rem',

    borderRadius: 6,
    
    padding: 40,
})

export const DivDescricao = styled ('div', {
    display: 'flex',

    div: {
        paddingLeft: '1rem'
    }
})

export const ButtonWrapp = styled ('div', {

})