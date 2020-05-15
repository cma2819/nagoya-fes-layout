import {
  CreateNodecgInstance,
  CreateNodecgConstructor
} from 'ts-nodecg/browser';
// import { Configschema } from '../nodecg/generated/configschema';
import { ReplicantMap } from '../nodecg/replicants';
import { SpeedcontrolReplicantMap } from '../nodecg/speedcontrol';
import { SpeedcontrolAdditionsReplicantMap } from '../nodecg/speedcontrol-additions';
import { MessageMap } from '../nodecg/messages';

type SpeedcontrolInstance = CreateNodecgInstance<
  'nodecg-speedcontrol',
  {},
  SpeedcontrolReplicantMap,
  {},
  true
>

type SpeedcontrolConstructor = CreateNodecgConstructor<
  'nodecg-speedcontrol',
  {},
  SpeedcontrolReplicantMap,
  {},
  true
>

type AdditionsInstance = CreateNodecgInstance<
  'speedcontrol-additions',
  {},
  SpeedcontrolAdditionsReplicantMap,
  {},
  true
>

type AdditionsConstructor = CreateNodecgConstructor<
  'speedcontrol-additions',
  {},
  SpeedcontrolAdditionsReplicantMap,
  {},
  true
>

declare global {
  const nodecg: CreateNodecgInstance<
    'nagoya-fes-layout',
    {},
    ReplicantMap,
    MessageMap
  > & SpeedcontrolInstance & AdditionsInstance;
  const NodeCG: CreateNodecgConstructor<
    'nagoya-fes-layout',
    {},
    ReplicantMap,
    MessageMap
  > & SpeedcontrolConstructor & AdditionsConstructor;
}