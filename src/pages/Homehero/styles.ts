import { styled } from "../../styles/stitches.config";

export const DivHeaderStyled = styled('div', {
    width: '100%',
    maxWidth: 1120,
    padding: '0 1.5rem',
    margin: '0 auto', //elementos importantes, pois o max-widht e esse numero limita o maximo de largura, e esse margin centraliza, padding ajuda pra que se o monitor é pequeno nao fique colado
    
    height: '30rem',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
    
})

export const DivHeaderTextStyled = styled('div', {
})

export const DivHeaderH1Styled = styled('div', {
    paddingBottom: '2rem',
    width: '30rem',
    fontSize: '1.3rem',
    color: '$--base---title',

    h1: {
        fontFamily: 'Baloo2', //esse css-in-js não aceita nomes separados (tipo: Baloo 2) entao tive que fazer coisas para alterar o nome para Baloo2 (olhar @font-face em global)
        fontWeight: '700',
        lineHeight: '3.2rem'
    }
})

export const DivHeaderPStyled = styled('div', {
    width: '30rem',
    fontSize: '1.1rem',
    lineHeight: '1.5rem',
    marginBottom: '4.125rem'
})

export const DivHeaderFeatureStyled = styled('div', {
    width: '35rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',

    div: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        lineHeight: '2rem'
    }
})

export const EUNAOAGUENTOMAISDIV =styled('div', {
    height: 25,
    width: 25,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$--base---button',


    '&.ShoppingCart': {
        backgroundColor: '$--brand-----yellow--dark'
    },

    '&.Package': {
        backgroundColor: '$--base---text'
    },
    
    '&.Timer': {
        backgroundColor: '$--brand-----yellow'
    },

    '&.Coffee': {
        backgroundColor: '$--brand---purple'
    },
})

export const DivCafeContainer = styled('div', {
    width: '100%',
    maxWidth: 1120,
    padding: '0 1.5rem',
    margin: '6rem auto 3rem',

    h1: {
        fontFamily: 'Baloo2'
    }
})

export const DivCafeContainerWrap = styled('div', {
    marginTop: '3rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2.2rem',
})