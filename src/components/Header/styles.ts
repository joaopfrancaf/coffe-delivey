import { styled } from "../../styles/stitches.config";

export const HeaderDiv = styled('div', {
    width: '100%',
    maxWidth: 1120,
    margin: '0 auto',
    padding: '2rem 1.5rem 2rem 1.5rem',
    
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

})

export const DivStyledNav = styled('div', {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    height: '2.5rem'
})

export const DivLocal = styled('div', {
    backgroundColor: '$--brand---purple--light',
    color: '$--brand---purple--dark',
    fontWeight: '400',
    padding: 8,
    borderRadius: 6,
    height: '2.5rem',

    display: 'flex',
    alignItems: 'center',
    gap: 5
})

export const DivCashOut = styled('button', {
    backgroundColor: '$--brand---yellow--light',
    padding: 10,
    borderRadius: 6,
    height: '2.5rem',
    borderStyle: 'none',
    cursor: 'pointer',
    
    display: 'flex',
    alignItems: 'center',
})