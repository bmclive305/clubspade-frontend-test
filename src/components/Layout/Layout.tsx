import { PropsWithChildren } from "react";
import ComplexNavbar from "../nav/ComplexNavbar";
export default function Layout({children} : PropsWithChildren<any>) {
  return (
    <>
      <ComplexNavbar />
      <div className="justify-center">
        {children}
      </div>
      
      {/* Footer */}
      {/* You can add more things here  */}
    </>
  );
}
