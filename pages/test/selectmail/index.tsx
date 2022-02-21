import { Box, Heading, Input } from '@chakra-ui/react'
import SelectUPN from 'components/SelectUPN'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';


/**
 * you can call this page with the following parameters
 * 
 * displayName=FirstName middlename middlename Surname
 */
const Home: NextPage = () => {
  const router = useRouter()
  const [mailprefix, setmailprefix] = useState<string>()
  const [displayName, setdisplayName] = useState<string>(router.query.displayName as string)

  const defaultDisplayName = router.query.displayName as string
  return (
    <Box>
      <Head>
        <title>Select mail address</title>
      </Head>
      <Input defaultValue={defaultDisplayName} onChange={(e) => { setdisplayName(e.target.value) }}></Input>
      <SelectUPN displayName={displayName} onSelected={(upn) => { setmailprefix(upn) }} />
      <Box>
        <Heading>Select mail prefix</Heading>
        {mailprefix}


      </Box>
    </Box>

  )
}

export default Home
