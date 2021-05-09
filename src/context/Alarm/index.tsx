import React, { useMemo, useState } from "react";

export type Alarm = {
  id: string;
  coinPair: string;
  value: number;
};

type State = {
  alarms: Alarm[];
};

type Actions = {
  addAlarm: (alarm: Alarm) => void;
  editAlarm: (id: string, alarm: Partial<Alarm>) => void;
  removeAlarm: (id: string) => void;
};

const Context = React.createContext<(State & Actions) | undefined>(undefined);

const AlarmProvider: React.FC<State> = ({ alarms: as, children }) => {
  const [alarms, setAlarms] = useState<Alarm[]>(as);

  const actions = useMemo(
    () => ({
      addAlarm: (alarm: Alarm) => {
        setAlarms([...alarms, alarm]);
      },
      editAlarm: (id: string, alarm: Partial<Alarm>) => {
        const update = alarms.map((a) => {
          if (a.id === id) {
            return { ...a, ...alarm };
          }

          return a;
        });

        setAlarms(update);
      },
      removeAlarm: (id: string) => {
        const update = alarms.filter((a) => a.id !== id);
        setAlarms(update);
      },
    }),
    [alarms]
  );

  return (
    <Context.Provider value={{ ...actions, alarms }}>
      {children}
    </Context.Provider>
  );
};

const useAlarms = () => {
  const context = React.useContext(Context);

  if (!context) {
    throw new Error("useAlarm must be used within AlarmProvider");
  }

  return context;
};

export { AlarmProvider, useAlarms };
