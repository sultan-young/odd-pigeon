import { MENUS_TREE } from '@/menu';
import React, { useMemo } from 'react'
import { Link, Outlet, useLocation, useOutlet, useOutletContext, useParams } from "react-router-dom"
import { findNodeByKey } from '../../../common/utils/find';

function getComponent(paths: string[]) {

}

export function MainPanel() {
  const { featureKey } = useParams();
  const TargetComponent = useMemo(() => {
    const target = findNodeByKey(MENUS_TREE, featureKey || '');
    return target?.component || (() => <>Empty</>);
  }, [featureKey]);

  return (
    <>
      {
        React.isValidElement(<TargetComponent/>) ? <TargetComponent/> : '未找到元素'
      }
    </>
  )
}
