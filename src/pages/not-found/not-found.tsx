import { Link } from 'react-router-dom'

import { Button, Card, NotFoundImage, Page, Typography } from '@/common'

import s from './not-found.module.scss'

export const NotFound = () => {
  return (
    <Page>
      <Card className={s.root}>
        <Button as={Link} to={'/'}>
          Go Home
        </Button>
        <Typography as={'h1'} variant={'large'}>
          Not Found
        </Typography>
        <NotFoundImage />
      </Card>
    </Page>
  )
}
