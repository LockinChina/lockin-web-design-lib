/* eslint-disable no-script-url */
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PageList = styled.ul`
  display: flex;
  flex-direction: row;
  padding-left: 0;
  list-style: none;
  border-radius: 0.45rem;
  margin-top: 0;
  margin-bottom: 1rem;
  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`;

const PageItem = styled.li`
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }
`;

const PageLink = styled.a`
  position: relative;
  display: block;
  height: 30px;
  line-height: 30px;
  padding: 0 11px;
  border-radius: 3px;
  color: #979797;
  margin-left: 10px;
  font-size: 12px;
  border: 1px solid rgba(151,151,151,1);
  color: #979797;
  background-color: #fff;
  &:hover {
    color: #000099;
    border-color: #000099;
  }
  &.actived{
    border: 1px solid #000099;
    color: #fff;
    background-color: #000099;
  }
`;

export interface PaginationProps {
  pageSize?: number; // 一页多少条
  total?: number; // 总数
  paginate?: (num: number) => void; // 点击事件
  currentPage?: number; // 当前页
  lang?: 'cn' | 'en';
}

const Pagination: React.FC<PaginationProps> = (
    {pageSize, total, paginate, currentPage, lang},
) => {
  const pageNumbers: React.SetStateAction<number[]> = [];
  const [hasFirst, setHasFirst] = useState(true);
  const [hasLast, setHasLast] = useState(true);
  const [hasPrevious, setHasPrevious] = useState(true);
  const [hasNext, setHasNext] = useState(true);

  if (typeof total === 'number' && typeof pageSize === 'number') {
    for (let i = 1; i <= Math.ceil(total / pageSize); i += 1) {
      pageNumbers.push(i);
    }
  }

  const [showPageArray, setShowPageArray] = useState([1]);

  useEffect(() => {
    if (typeof currentPage === 'number') {
      if (currentPage === 1) {
        setHasPrevious(false);
        setHasFirst(false);
      } else {
        setHasPrevious(true);
      }
      if (currentPage > 3 && pageNumbers.length > 5) {
        setHasFirst(true);
      }
      if (pageNumbers.length === 1) {
        setHasFirst(false);
        setHasNext(false);
        setHasPrevious(false);
        setHasLast(false);
      } else if (currentPage === pageNumbers.length) {
        setHasLast(false);
        setHasNext(false);
      } else {
        setHasLast(true);
        setHasNext(true);
      }
      if (pageNumbers.length < 6) {
        setShowPageArray(pageNumbers);
      } else if (currentPage < 4) {
        setShowPageArray([1, 2, 3, 4, 5]);
      } else if (pageNumbers.length - currentPage < 4) {
        setShowPageArray([
          pageNumbers.length - 4,
          pageNumbers.length - 3,
          pageNumbers.length - 2,
          pageNumbers.length - 1,
          pageNumbers.length,
        ]);
      } else {
        setShowPageArray([
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
        ]);
      }
    }
  }, [currentPage, total]);

  return (
    <nav>
      {total !== 0 && (
        <PageList>
          {/* 首页显示逻辑 */}
          {hasFirst ? (
            <PageItem key="firstpg">
              <PageLink onClick={() => paginate && paginate(1)} href="javascript:void(0)">
                {lang === 'en' ? 'First' : '首页'}
              </PageLink>
            </PageItem>
          ) : null}

          {/* 上一页显示逻辑 */}
          {hasPrevious ? (
            <PageItem key="prevpg">
              <PageLink
                onClick={() => {
                  if (typeof currentPage === 'number') {
                    paginate && paginate(currentPage - 1);
                  }
                }}
                href="javascript:void(0)"
              >
                {lang === 'en' ? 'Previous' : '上一页'}
              </PageLink>
            </PageItem>
          ) : null}
          {/* 显示更多 */}
          {currentPage && currentPage > 3 && pageNumbers.length > 5 ? (
            <PageItem key="morepgm">
              <PageLink href="javascript:void(0)">...</PageLink>
            </PageItem>
          ) : null}
          {/* ==========================================> */}
          {showPageArray.map((number) => (
            <PageItem key={number}>
              <PageLink
                className={number === currentPage ? 'actived' : ''}
                onClick={() => paginate && paginate(number)}
                href="javascript:void(0)"
              >
                {number}
              </PageLink>
            </PageItem>
          ))}
          {/* =====================显示更多...=====================> */}
          {showPageArray[4] < pageNumbers[pageNumbers.length - 1] ? (
            <PageItem key="morepgp">
              <PageLink href="javascript:void(0)">...</PageLink>
            </PageItem>
          ) : null}
          {/* 下一页显示逻辑 */}
          {hasNext ? (
            <PageItem key="nextpg">
              <PageLink
                onClick={() => {
                  if (typeof currentPage ==='number') {
                    paginate && paginate(currentPage + 1);
                  }
                }}
                href="javascript:void(0)"
              >
                {lang === 'en' ? 'Next' : '下一页'}
              </PageLink>
            </PageItem>
          ) : null}
          {/* 尾页显示逻辑 */}
          {hasLast ? (
            <PageItem key="endpg">
              <PageLink
                onClick={() => paginate && paginate(pageNumbers.length)}
                href="javascript:void(0)"
              >
                {lang === 'en' ? 'End' : '尾页'}
              </PageLink>
            </PageItem>
          ) : null}
        </PageList>
      )}
    </nav>
  );
};

Pagination.defaultProps = {
  lang: 'en',
};
Pagination.propTypes = {
  pageSize: PropTypes.number,
  total: PropTypes.number,
  paginate: PropTypes.func,
  currentPage: PropTypes.number,
};
export default Pagination;
