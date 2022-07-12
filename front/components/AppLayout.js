import { useState } from "react";
import Link from "next/link";
import { Menu, Input, Col, Row } from "antd";
import "antd/dist/antd.css";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const { Search } = Input;
const SearchInput = styled(Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const onSearch = () => {};

  return (
    <div id="root">
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">노드버드</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">회원가입</Link>
        </Menu.Item>
      </Menu>

      <Row>
        <Col span={4}>{isLogin ? <div>프로필</div> : <LoginForm />}</Col>
        <Col span={12}>{children}</Col>
        <Col span={4}>
          <a href="https://www.notion.so/Front-end-Developer-e6c9d68415b64975bf5f6ffa975d04cf">
            Made by Hyesun
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default AppLayout;
