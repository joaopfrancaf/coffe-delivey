import { styled } from "../../styles/stitches.config";

export const CardStyled = styled('div', {
    backgroundColor: '$--base---card',
    borderRadius: '6px 36px',

    width: '15rem',
    height: '18.5rem',
    padding: '0 1.5rem',

    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
})

export const DivType =styled('div', {
    marginTop: 15,
    marginBottom: '1rem',

    span: {
        fontSize: 13,
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

    span: {
        fontWeight: 700,
        fontFamily: 'Baloo2',
        fontSize: '1.2rem',
    },

    p: {
        marginTop: '1rem',
        color: '$--base---label',
        fontWeight: 400,
        fontSize: 14,
        textAlign: 'center'
    }
})