import { styled } from "../../styles/stitches.config";

export const DivContainer = styled('div', {
    width: '100%',
    maxWidth: 1120,
    padding: '0 1.5rem',
    margin: '0 auto',

    marginTop: '4rem'
})

export const DivTextConfirmado = styled('div', {
    marginBottom: '2.2rem',

    h2: {
        color: "$--brand-----yellow--dark",
        fontFamily: 'Baloo2'
    },

    span: {
        fontWeight: 400,
        fontSize: "1.25rem"
    }
})

export const DivContainerInfoeImg = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '6rem'
})

export const DivInformacoesContainer = styled('div', {
    border: 'solid 1px $--brand---purple',
    borderRadius: "6px 36px",

    display: "flex",
    flexDirection: "column",
    gap: '2rem',
    padding: '2.5rem'
})

export const DivEndereco = styled('div', {

})

export const DivPrevisao = styled('div', {
    
})

export const DivPagamento = styled('div', {
    
})

export const DivElement = styled('div', {
    display: 'flex',
    alignItems: "center",
    gap: '1rem',

    p:{
        span: {
            fontWeight: "bold"
        }
    },
})

//não é assim no stitchesss
/*interface DivElementProps {
    variant: 'roxo' | 'amarelo' | 'ouro'
}*/

export const DivIcon = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 30,
    minWidth: 30,
    borderRadius: '50%',

    variants: {
        color: {

            roxo:{
                backgroundColor: '$--brand---purple',
            },

            amarelo: {
                backgroundColor: '$--brand-----yellow',
            },

            ouro: {
                backgroundColor: '$--brand-----yellow--dark',
            }
        }
    }

})