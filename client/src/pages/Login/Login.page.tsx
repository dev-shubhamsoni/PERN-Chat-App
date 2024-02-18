import { FC, ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLoginData } from "../../redux/LoginSlice";

interface LoginProps {}

export const Login: FC<LoginProps> = () => {
  const navigate = useNavigate();
  const [userName, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getLoginData({ name: userName, password: password }));
  };

  return (
    <div className="bg-backgroundLight h-[15rem] w-[25rem] rounded-xl flex justify-center items-center">
      <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} placeholder="username" className="w-[14rem]" />
          <Input onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder="password" className="w-[14rem]" />
        </div>

        <div className="flex gap-4 h-[3rem] items-end">
          <Button>Login</Button>
          <h2
            onClick={() => navigate("register")}
            className="text-white text-[0.8rem] cursor-pointer"
          >
            Register
          </h2>
        </div>
      </form>
    </div>
  );
};
