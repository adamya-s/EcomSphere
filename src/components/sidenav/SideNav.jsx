import React, { useEffect } from 'react';
import './_side-nav.scss';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../../Redux/Category/actions';

const SideNav = () => {
  const accordionData = useSelector(
    (state) => state.categoryReducer.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <div className='side-nav'>
      <div className='section-title'>
        <h3>Category</h3>
        <div className='accordion'>
          {accordionData.map((accordianCategory, key) => {
            if (accordianCategory.parent_category_id === null) {
              const collapseId = `collapse${key}`;
              return (
                <div className='accordion-item individual-category' key={key}>
                  <div className='accordian-header'>
                    <button
                      className='accordion-button'
                      data-bs-target={`#${collapseId}`}
                      data-bs-toggle='collapse'
                    >
                      <div className='category-tile'>
                        <a href='#'>{accordianCategory.category}</a>
                      </div>
                    </button>
                  </div>
                  <div
                    className='accordion-collapse collapse show'
                    //first accordion to  be open by default, add show to the first item only
                    // className={`accordion-collapse collapse ${key === 0 ? 'show' : ''}`}
                    id={collapseId}
                  >
                    <div className='accordion-body'>
                      <ul>
                        {accordionData.map((subCategory) => {
                          if (
                            accordianCategory.id ===
                            subCategory.parent_category_id
                          ) {
                            return (
                              <li className='sub-items'>
                                <a href='#'>{subCategory.category}</a>
                              </li>
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
