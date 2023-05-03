import { styled } from "../../styles/stitches.config";

export const DivCheckoutContainer = styled('div', {
    width: '100%',
    maxWidth: 1120,
    padding: '0 1.5rem',
    margin: '0 auto',

    //display: 'grid',
    //gridTemplateColumns: '1.5fr 0.5fr'
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem'
})

export const DivCheckoutSeuPedidoContainer = styled('div', {

    h2: {
        marginTop: '1.5rem',
        marginBottom: '1rem'
    }
})

export const DivCheckoutSeuPedido = styled('div', {
    backgroundColor: '$--base---card',
    width: '37rem',
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
    height: '13rem',
    width: '37rem',

    borderRadius: 6,
    
    padding: 40,
    marginBottom: '2rem'
})

export const DivDescricao = styled ('div', {
    display: 'flex',

    div: {
        paddingLeft: '0.5rem',

        span: {
            fontSize: '1.2rem',
        }

    }
})

export const ButtonWrapp = styled ('div', {
    display: 'flex',
    justifyContent: 'space-between',
})

export const ButtonDiv = styled('button', {
    marginTop: '2rem',
    borderRadius: 6,
    backgroundColor: '$--base---button',
    width: '10.1rem',
    height: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    gap: '0.4rem',

    borderStyle: 'none',
    fontSize: 13,
    color: '$--base---subtitle',

    '&:focus': {
        backgroundColor: '$--brand---purple--light',
        border: '1px solid #8047F8',
        borderRadius: 6,
    },

    "&:hover": {
        backgroundColor: '$--base---hover',
    },
})

export const DivCheckoutCarrinhoContainer = styled('div', {
    h2: {
        marginTop: '1.5rem',
        marginBottom: '1rem'
    }
})

export const DivCheckoutCarrinho = styled('div', {
    width: 'fit-content',
    height: 'fit-content',

    backgroundColor: '$--base---card',
    borderRadius: '6px 44px',

    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',

    ul: {
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',

        li:{
            listStyle: 'none'
        }
    }
    
})

export const CheckoutTotals = styled('div', {
    marginTop: '2rem',

    div: {
        display: 'flex',
        justifyContent: 'space-between',
        lineHeight: '2rem'
    }
})