// ** Assets
import style from "../styles/layouts/ChatLayout.module.css";
// ** Hooks
import { SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../App/store";
import InputElement from "../components/ui/InputElement";
// ** Assets
import chatP1 from "../assets/layout/chatLayout/chatP1.png";
import chatP2 from "../assets/layout/chatLayout/chatP2.png";
import replyIcon from "../assets/layout/chatLayout/replayIcon.png";
import editIcon from "../assets/layout/chatLayout/editIcon.png";
import pinIcon from "../assets/layout/chatLayout/pinIcon.png";
import deleteIcon from "../assets/layout/chatLayout/deleteIcon.png";
import settingMsg from "../assets/layout/chatLayout/settingMsg.png";
import search from "../assets/layout/chatLayout/search.png";

interface Message {
  sender: string;
  text: string;
  timestamp: Date;
}

interface ChatLayoutProps {
  chatType: "patient" | "doctor";
}

export default function ChatLayout({ chatType }: ChatLayoutProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedChat, setSelectedChat] = useState<{
    name: string;
    image: string;
  } | null>(null);
  const [showChatArea, setShowChatArea] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const currentUser = useSelector((state: RootState) => state.userLogin);

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const msg: Message = {
      sender: currentUser.email!,
      text: newMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, msg]);
    setNewMessage("");
  };

  if (
    (chatType === "doctor" && currentUser.role !== "doctor") ||
    (chatType === "patient" && currentUser.role !== "patient")
  ) {
    return <p>ليس لديك صلاحية للدخول لهذه الصفحة</p>;
  }

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      className={`${style.chatLayout} ${
        showChatArea ? style["mobile-chat-active"] : ""
      }`}
    >
      <div className={style.sidebar}>
        <InputElement
          id="chat-search"
          name="ابحث"
          placeholder="ابحث عن محادثة..."
          type="search"
          value={searchTerm}
          onChange={handleChange}
          img={{ src: search, alt: "search" }}
        />
        <div
          className={style.chatPreview}
          onClick={() => {
            setSelectedChat({
              name: "أميرة رزق",
              image: chatP1,
            });
            setShowChatArea(true);
          }}
        >
          <img src={chatP1} alt="User" />
          <div>
            <h3>اميره رزق</h3>
            <div className={style.previewMessage}>
              <p>دكتور، حاسس بإجهاد شديد النهارده، ممكن أحتاج..</p>
              <span>9:41 AM</span>
            </div>
          </div>
        </div>
        <div
          className={style.chatPreview}
          onClick={() => {
            setSelectedChat({
              name: "نبيله حامد",
              image: chatP2,
            });
            setShowChatArea(true);
          }}
        >
          <img src={chatP2} alt="User" />
          <div>
            <h3>نبيله حامد</h3>
            <div className={style.previewMessage}>
              <p> سمحت يا دكتور، في ألم بسيط في الجنب اليمين دا..</p>
              <span>4:01 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      {!selectedChat ? (
        <div className={style.startChatMsg}>
          <h3>اختر شات للبدأ</h3>
        </div>
      ) : (
        <div className={style.chatArea}>
          {/* Header */}
          <div className={style.chatHeader}>
            <div>
              <img src={selectedChat.image} alt={selectedChat.name} />
              <h3>{selectedChat.name}</h3>
            </div>

            <button
              className={style.backButton}
              onClick={() => setShowChatArea(false)}
            >
              «
            </button>
          </div>

          {/* Messages */}
          <div className={style.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={
                  msg.sender === currentUser.email
                    ? style.myMsg
                    : style.theirMsg
                }
              >
                <p className={style.msg_text}>
                  {msg.text}
                  <div className={style.msg_setting}>
                    <div className={style.msg_setting_options}>
                      <p>
                        <img src={replyIcon} alt="" />
                        <span>رد</span>
                      </p>
                      <p>
                        <img src={editIcon} alt="" />
                        <span>تعديل الرساله</span>
                      </p>
                      <p>
                        <img src={pinIcon} alt="" />
                        <span>تثبيت في الشات</span>
                      </p>
                      <p>
                        <img src={deleteIcon} alt="" />
                        <span>مسح الرساله</span>
                      </p>
                    </div>
                    <img src={settingMsg} alt="" />
                  </div>
                </p>
                <small>{msg.timestamp.toLocaleTimeString()}</small>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className={style.inputArea}>
            <input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="اكتب رسالتك هنا..."
            />
            <button onClick={handleSend}>إرسال</button>
          </div>
        </div>
      )}
    </div>
  );
}
