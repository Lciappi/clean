import styled from '@emotion/styled'

export const StyledLayout = styled.div`
  display: flex;
  min-height: 100vh;
  
  .navbar {
    height: 64px;
    background: transparent;
    box-shadow: none;
  }
  
  .sidebar {
    flex-grow: 0;
    width: 256px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
    .MuiListItemText-root {
      color: rgba(58, 53, 65, 0.87);
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      letter-spacing: 0.15px;
    }
  }
  
  .layout-container {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .content {
    padding: 2rem ;
  }
`
