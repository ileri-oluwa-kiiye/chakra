import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Form_one from './form1.jsx'
import Form_two from './form2.jsx'

const Forms = () =>{
    return(
        <div className="form">
            {/* Using Chakra UI for these */}
            <Tabs variant='soft-rounded' colorScheme='blue'>
                <TabList>
                    <Tab>About Business</Tab>
                    <Tab>Team Members</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Form_one />
                        {/* To embed the first form here */}
                    </TabPanel>

                    <TabPanel>
                        <Form_two/>
                        {/* To embed the second form in this second tab */}
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default Forms