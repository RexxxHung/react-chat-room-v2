import React, { useCallback, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { v4 as uuidv4 } from "uuid";

import { useHistory } from "react-router";
import { chatRoomInfoType, StateContext } from "../index";

// Components
import DrawerContent from "./DrawerContent";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Drawer,
  Snackbar,
  TextField,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";

import styled from "styled-components";

const ContainerDivStyled = styled.div`
  .header {
    position: relative;
    background-color: #00d8ff;
    color: #fff;
    text-align: center;
    padding: 10px;
    letter-spacing: 5px;
    width: 80%;
    margin: 0 auto;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    .addIcon {
      position: absolute;
      right: 10px;
      text-align: center;
      top: 8px;
      cursor: pointer;
    }
  }

  .body {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    .chatRoom {
      min-width: 200px;
      margin: 5px;
      border: 1.5px solid #000;
      border-radius: 10px;
      transition: all 0.3s ease-in-out;
      cursor: pointer;
      animation: borderChange 0.3s linear;
      @media (max-width: 530px) {
        width: 100%;
      }
      h3 {
        text-align: center;
        margin: 5px;
        border-bottom: 1.5px solid #000;
      }
      .desc {
        padding: 5px;
        font-size: 12px;
        margin: 0;
      }
      &:hover {
        background-color: #e8e8e8;
      }
      &:active {
        transform: scale(0.9);
      }
    }
  }
`;

const Lobby: React.FC = () => {
  const history = useHistory();
  const data = useContext(StateContext);
  const [bottomDrawer, setBottomDrawer] = useState<boolean>(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    severity: "error" | "warning" | "info" | "success";
    message?: string;
  }>({
    open: false,
    severity: "info",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [userNumber, setUserNumber] = useState<number>(0);
  const [chatRooms, setChatRooms] = useState<chatRoomInfoType[] | []>([]);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [newChatRoom, setNewChatRoom] = useState<{
    name?: string;
    desc?: string;
  }>();

  // Init
  useEffect(
    () => {
      if (!data?.state.name) {
        history.push("/");
      } else if (!data?.state.ws && !data?.state.selectChatRoom) {
        setLoading((preVal: any) => (preVal = true));

        const newSocket = io(
          process.env.REACT_APP_API_DOMAIN
            ? process.env.REACT_APP_API_DOMAIN
            : "http://localhost:3000",
          {
            transports: ["websocket"],
          }
        );

        if (data?.setState) {
          data.setState(
            (preVal) =>
              (preVal = {
                ...preVal,
                ws: newSocket,
                id: uuidv4(),
              })
          );
        }
      } else if (data.state.ws && data.state.name) {
        data.state.ws.emit("updateInfo");
      }

      // ??????????????? Return ???????????????????????????????????????????????? WS
      // return () => {
      //   console.log("newSocket.close()");

      //   newSocket.close();
      // };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // ?????? WS
  useEffect(
    () => {
      if (data?.state.ws) {
        //??????????????? console ???????????????
        console.log("success connect!");
        //????????????
        initWebSocket();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.state.ws]
  );

  // WS Function

  const initWebSocket = useCallback(
    () => {
      data?.setState(
        (preVal) =>
          (preVal = {
            ...preVal,
          })
      );

      if (data?.state.ws) {
        if (!data.state.selectChatRoom) {
          // ?????? login ??? Socket.io
          data.state.ws.emit("login", {
            id: data?.state.id,
            name: data?.state.name,
          });
        }

        // ????????????
        data.state.ws.once("connectionSuccess", (data) => {
          setSnackbar(
            (preVal) =>
              (preVal = {
                open: true,
                severity: "success",
                message: data.message,
              })
          );

          setTimeout(() => {
            setSnackbar(
              (preVal) =>
                (preVal = {
                  ...preVal,
                  open: false,
                })
            );
          }, 2000);

          setLoading((preVal: any) => (preVal = false));
        });

        // ????????????
        data.state.ws.once("connectionFail", (data) => {
          setSnackbar(
            (preVal) =>
              (preVal = {
                open: true,
                severity: "error",
                message: data.message,
              })
          );
          setTimeout(() => {
            history.push("/");
          }, 1000);
        });

        // ??????????????????
        data.state.ws.on("updateInfo", (data) => {
          setUserNumber(data.userNumber);
          setChatRooms(data.chatRooms);
        });

        // ??????????????????
        data.state.ws.on("personalAnnouncement", (dataInfo) => {
          const { data } = dataInfo;

          setSnackbar(
            (preVal) =>
              (preVal = {
                open: true,
                severity:
                  data.text === "????????????"
                    ? "success"
                    : data.text === "????????????"
                    ? "error"
                    : "info",
                message: data.text,
              })
          );

          setTimeout(() => {
            setSnackbar(
              (preVal) =>
                (preVal = {
                  ...preVal,
                  open: false,
                })
            );
          }, 2000);
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [data?.state.ws]
  );

  // ???????????????
  const joinChatRoomHandler = (chatRoom: chatRoomInfoType) => {
    data?.setState(
      (preVal) =>
        (preVal = {
          ...preVal,
          selectChatRoom: chatRoom,
        })
    );

    history.push({
      pathname: `/chat-room/${chatRoom.id}`,
    });
  };

  // ????????????
  const toggleDrawer = () => {
    setBottomDrawer((bottomDrawer) => (bottomDrawer = !bottomDrawer));
  };

  // ?????????????????????????????????
  const toggleDialogHandler = () => {
    setIsDialogOpen(!isDialogOpen);
    setNewChatRoom({
      name: undefined,
      desc: undefined,
    });
  };

  return (
    <ContainerDivStyled>
      {loading ? (
        <></>
      ) : (
        <>
          <header className="header">
            <label className="title">Lobby</label>
            <MenuIcon
              className="addIcon"
              onClick={() => toggleDrawer()}
            ></MenuIcon>
            <Drawer
              anchor="bottom"
              open={bottomDrawer}
              onClose={() => toggleDrawer()}
            >
              <DrawerContent
                toggleDrawer={toggleDrawer}
                userNumber={userNumber}
                openCreateModalHandler={() => toggleDialogHandler()}
              ></DrawerContent>
            </Drawer>

            <Dialog open={isDialogOpen} onClose={() => toggleDialogHandler()}>
              <DialogTitle>???????????????</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  ?????????????????????????????????????????????????????????
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="chatRoomName"
                  label="???????????????"
                  type="chatRoomName"
                  fullWidth
                  variant="standard"
                  onChange={(e) => {
                    setNewChatRoom(
                      (preVal) =>
                        (preVal = {
                          ...preVal,
                          name: e.target.value,
                        })
                    );
                  }}
                />
                <TextField
                  margin="dense"
                  id="chatRoomDesc"
                  label="???????????????"
                  type="chatRoomDesc"
                  fullWidth
                  variant="standard"
                  onChange={(e) => {
                    setNewChatRoom(
                      (preVal) =>
                        (preVal = {
                          ...preVal,
                          desc: e.target.value,
                        })
                    );
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => toggleDialogHandler()}>??????</Button>
                <Button
                  onClick={() => {
                    if (!data?.state.id && !newChatRoom?.name) return;

                    if (data?.state.ws) {
                      data.state.ws.emit("createNewChatRoom", {
                        userId: data.state.id,
                        ...newChatRoom,
                      });
                    }

                    toggleDialogHandler();
                  }}
                >
                  ??????
                </Button>
              </DialogActions>
            </Dialog>
          </header>

          <section className="body">
            {chatRooms.map((chatRoom, idx) => {
              return (
                <div
                  className="chatRoom"
                  key={idx}
                  onClick={() => joinChatRoomHandler(chatRoom)}
                >
                  <div className="chatRoom__content">
                    <h3>
                      {chatRoom.name}({chatRoom.userNumber})
                    </h3>
                    <p className="desc">{chatRoom.desc}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </>
      )}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackbar.open}
        onClose={() =>
          setSnackbar(
            (preVal) =>
              (preVal = {
                ...preVal,
                open: false,
              })
          )
        }
        key={0}
        autoHideDuration={2000}
      >
        <Alert
          onClose={() =>
            setSnackbar(
              (preVal) =>
                (preVal = {
                  ...preVal,
                  open: false,
                })
            )
          }
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ContainerDivStyled>
  );
};

export default Lobby;
