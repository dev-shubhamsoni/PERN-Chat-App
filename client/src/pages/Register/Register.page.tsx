import { useEffect, FC, ChangeEvent, FormEvent } from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getRegistrationData } from "../../redux/RegistrationSlice";
import { RootState } from "../../store/store"; // Assuming you have a store setup

interface RegisterProps {}

export const Register: FC<RegisterProps> = () => {
  const dispatch = useDispatch();
  const { register } = useSelector((state: RootState) => state.registerData);

  const getname = register.name;

  useEffect(() => {
    console.log("test", getname);
  }, [getname]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(getRegistrationData({ name, email, userName, password }));
  };

  return (
    <div className="h-[25rem] w-[22rem] bg-backgroundLight rounded-xl flex flex-col justify-center items-center">
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col gap-4">
        <Input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Name"
        />
        <Input
          type="email"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <Input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}
          placeholder="Username"
        />
        <Input
          type="text"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button>Register</Button>
      </form>
    </div>
  );
};
