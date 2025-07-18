import { WorkspaceMigrationActionV2 } from 'src/engine/workspace-manager/workspace-migration-v2/types/workspace-migration-action-v2';

export interface WorkspaceMigrationV2<
  TActions extends WorkspaceMigrationActionV2 = WorkspaceMigrationActionV2,
> {
  // formatVersion: 1;
  // createdAt: string;
  // name: string;
  // description?: string;
  actions: TActions[];
  // objectActions: TActions[] // could be cool ?
}
