import { useEffect, useRef } from "react";
import * as VKID from "@vkid/sdk";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setUser } from "../../store/userStore";

const APP_NAME = "vk shuffler";

export default function VKIDFloatingOneTap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!containerRef.current) return;

    // Инициализация VKID перед использованием

    const floatingOneTap = new VKID.FloatingOneTap();

    floatingOneTap
      .render({
        appName: APP_NAME,
        scheme: VKID.Scheme.DARK,
        lang: VKID.Languages.RUS,
      })
      .on(
        VKID.FloatingOneTapInternalEvents.LOGIN_SUCCESS,
        function (payload: any) {
          const { code, device_id } = payload;

          VKID.Auth.exchangeCode(code, device_id)
            .then((result) => {
              console.log("VKID Auth result:", result);
              dispatch(
                setUser({
                  access_key: result.access_token,
                })
              );
            })
            .catch((err) => {
              console.error("VKID exchangeCode error:", err);
            });
        }
      )
      .on(VKID.WidgetEvents.ERROR, (error: any) => {
        console.error("VKID error:", error);
      });

    // Очистка при размонтировании
    return () => {
     //@ts-ignore
      floatingOneTap.close();
    };
  }, [dispatch]);

  return <div ref={containerRef} />;
}
