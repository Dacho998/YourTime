interface UserInfoProps {
  name: string;
  avatar: string;
  isMobile?: boolean;
}

export default function UserInfo({
  name,
  avatar,
  isMobile = false,
}: UserInfoProps) {
  return (
    <div className={isMobile ? "user-info-mobile" : "user-info-desktop"}>
      <img src={avatar} alt="avatar" className="user-avatar" />
      <span>{name}</span>
    </div>
  );
}
