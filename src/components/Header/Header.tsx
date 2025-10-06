import { Badge, Button, Popover, Text } from "@mantine/core";
import CartIcon from "../../assets/cart.svg?react";
import { useState } from "react";
import { CartDropdown } from "../index";
import styles from "./Header.module.scss";
import { useTypedSelector } from "../../hooks/redux";

export default function Header() {
  const [opened, setOpened] = useState(false);
  const cart = useTypedSelector((state) => state.cart.cart);

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <Text fw={600}>Vegetable</Text>
        <Badge color="#54B46A" size="lg" radius="lg">
          SHOP
        </Badge>
      </div>

      <div className={styles.right}>
        <Popover
          opened={opened}
          onChange={setOpened}
          width={380}
          position="bottom-start"
          withArrow
          shadow="md"
          withinPortal={false}
        >
          <Popover.Target>
            <Button
              variant="filled"
              color="#54B46A"
              size="lg"
              radius="md"
              rightSection={<CartIcon width={18} height={18} />}
              leftSection={
                cart.length > 0 && (
                  <Badge
                    size="lg"
                    circle
                    color="#DEE2E6"
                    className={styles.badge}
                  >
                    {cart.length}
                  </Badge>
                )
              }
              onClick={() => setOpened((prev) => !prev)}
            >
              Cart
            </Button>
          </Popover.Target>

          <Popover.Dropdown>
            <CartDropdown />
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  );
}
