import { Pagination as Pager } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { MoneyMove } from './MoneyMove'
import { Surface } from './Surface'

export const Pagination = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 10
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
  const pageNumbers = Math.ceil(data.length / postsPerPage)

  return (
    <Surface>
      {currentPosts.map((data) => (
        <MoneyMove variant={data?.categoryId} data={data} key={data.id} />
      ))}
      {pageNumbers !== 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <Pager
            count={pageNumbers}
            page={currentPage}
            onChange={(e, p) => setCurrentPage(p)}
            color='primary'
          />
        </Box>
      )}
    </Surface>
  )
}
