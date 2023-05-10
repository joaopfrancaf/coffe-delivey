import { styled } from "../../styles/stitches.config";

export const DivCarrinhoItem = styled("div", {
    width: '25rem',
    height: '4.5rem',

    backgroundColor: '$--base---card',

    padding: 11,
    display: 'flex',
    gap: '1rem',

    fontWeight: 700,
    fontSize: '1rem',
    
})

export const DivDescricao = styled('div', {
    width: '100%'
})

export const DivTitulo = styled('div', {
    display: 'flex',
    justifyContent: 'space-between'
})

export const DivButtonChange = styled('button', {
    width: '2rem',
    height: '2rem',
    outlineStyle: 'none',

    backgroundColor: '$--base---button',
    cursor: 'pointer',
    borderRadius: 6,
    borderStyle: 'none'
})

export const ButtonWraper = styled('div', {
    marginTop: '0.5rem',

    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
})

export const DivMorebuttons = styled('div', {
    backgroundColor: '$--base---button',
    borderRadius: 6,
})

export const DivRemoveButton = styled('button', {
    backgroundColor: '$--base---button',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    fontFamily: 'roboto',
    color: '$--base---text',
    width: '6.5rem',
    height: '2rem',
    borderStyle: 'none',
    cursor: 'pointer',
    borderRadius: 6,

    '&:hover': {
        backgroundColor: '$--base---hover'
    }
})