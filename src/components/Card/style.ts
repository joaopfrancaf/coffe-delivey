import { styled } from "../../styles/stitches.config";

export const CardStyled = styled('div', {
    backgroundColor: '$--base---card',
    borderRadius: '6px 36px',

    width: '15rem',
    height: '18.5rem',
    padding: 'auto 1.5rem 1.5rem 1.5rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',

    img: {
        marginTop: '-1.5rem'
    }
})

export const DivType =styled('div', {
    marginTop: 15,
    marginBottom: '1rem',

    span: {
        fontSize: 12,
        backgroundColor: "$--brand---yellow--light",
        color: '$--brand-----yellow--dark',
        borderRadius: 8,
        padding: '3px 8px',
        fontWeight: 'bold',
        margin: 2,
    }
})

export const DivDescription = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1.7rem',

    span: {
        fontWeight: 700,
        fontFamily: 'Baloo2',
        fontSize: '1.2rem',
    },

    p: {
        marginTop: 10,
        color: '$--base---label',
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center'
    }
})

export const CheckoutDiv = styled('div', {
    display: 'flex',
    alignItems: 'center',

    span: {
        '&.money': {
            fontWeight: '700',
            marginRight: '1.5rem',
    
            '&:before': {
                content: 'R$ ',
                fontWeight: '400',
                fontSize: 14
            }
        }
    }
})

export const CarrinhoAdd = styled('button', {
    width: '2rem',
    height: '2rem',

    backgroundColor: '$--brand---purple',
    borderStyle: 'none',
    cursor: 'pointer',
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 8,
})