import React from 'react'
import Section from './Section'
import styled from 'styled-components'

function Home() {
    return (
        <Container>

        <Section 
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Customer Order" />
{/* // backgroundIma="model-s.jpg"

// rightBtnText="Existing Inventory" * //> */}


<Section 
title="Model Y"
description="Order Online for Touchless Delivery"
        leftBtnText="Customer Order"
        backgroundImg="model-y.jpg"
/>
<Section
title="Model 3"
description="Order Online for Touchless Delivery"
backgroundImg="model-3.jpg"
        leftBtnText="Customer Order"
/>

<Section
title="Model X"
description="Order Online for Touchless Delivery"
backgroundImg="model-x.jpg"
        leftBtnText="Customer Order"
/>

<Section
title="Lowest Cost Solar Panels In America"
description="Money-back guarantee"
backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
/>

<Section
title="Solar for New Roofs"
description="Money-back guarantee"
backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
/>

<Section
title="Accessories"
description=""
backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
/>

        </Container>
            
        
    )
}

export default Home

const Container = styled.div`
height: 100vh;
width:100vw;

`
