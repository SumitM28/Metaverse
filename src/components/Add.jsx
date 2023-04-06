import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import { Close, DateRange, EmojiEmotions, Image, PersonAdd, VideoLibrary } from "@mui/icons-material";



const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title="Add" sx={{
                position: "fixed",
                bottom: 20,
                left: { xs: "calc(50% - 25px)", md: 30 }
            }} onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip >
            {open && <Modal
                open={open}
                // onClick={() => setOpen(true)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',

                }}
            >
                <Box width={400} height={400} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5} position={'relative'}>
                    <Tooltip title="Close" sx={{
                        position: 'absolute',
                        top: 15,
                        right: 15,
                        cursor: 'pointer'
                    }} onClick={() => setOpen(false)}>
                        <Close />
                    </Tooltip >

                    <Typography variant="h6" color={'gray'} textAlign={'center'}>Create post</Typography>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '20px'
                    }}>
                        <Avatar
                            src={'https://avatars.githubusercontent.com/u/96680613?v=4'}
                            sx={{ height: 30, width: 30 }}
                        />
                        <Typography variant="body2" color={'gray'} textAlign={'center'}>
                            <b>Sumit Mahour</b>
                        </Typography>
                    </Box>
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={4}
                        placeholder="What's on your mind?"
                        variant="filled"
                        sx={{
                            width: '100%'
                        }}
                    />

                    <Stack mt={2} mb={3} direction={'row'} gap={1}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoLibrary color="success" />
                        <PersonAdd color="error" />
                    </Stack>

                    <ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
                        <Button>Post</Button>
                        <Button sx={{ width: '100px' }}><DateRange /></Button>

                    </ButtonGroup>
                </Box>
            </Modal>}
        </>
    )
}

export default Add