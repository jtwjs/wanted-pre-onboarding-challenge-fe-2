/**
 * @typedef {Object} Todo
 * @property {string} id - todo를 구분할 수 있는 값입니다.
 * @property {number} content - todo의 내용값입니다.
 * @property {boolean} complete - todo 완료 여부입니다.
 * @property {'업무'|'공부'|'생활'|'운동'|'기타'} category - todo의 카테고리입니다.
 * @property {string} [tags] - 태그 목록입니다.
 */

/** todo의 비즈니스로직을 관리하는 클래스입니다. */
class Todo {
  /**
   * @param {Todo[]} [todos = []] - todo의 초깃값입니다.
   */
  constructor(todos) {}
  /**
   * @summary 모든 todo list를 조회합니다.
   * @param {string} [id] - id를 기반으로 특정 todo를 조회할 수 있다.
   * @return {Todo|Todo[]}  전체 todo를 반환합니다.
   */
  read(id) {}

  /**
   * - 내용 없이 추가할 수 있다.
   * @summary todo를 추가할 수 있습니다.
   * @param {Todo} todo
   */
  add(todo) {}

  /**
   * - 특정 할 일의 특정 태그를 수정할 수 있다.
   * @summary id를 제외한 모든 속성을 수정할 수 있다.
   * @param {string} id
   */
  update(id) {}

  /**
   * - id 값이 제공되면 특정 todo를 제거한다.
   * - id 값이 없다면 모든 todo 제거한다.
   * @summary todo를 제거합니다.
   * @param {string} [id]
   */
  delete(id) {}

  /**
   * - 특정 todo의 특정 태그를 제거할 수 있다.
   * - 특정 todo의 모든 태그를 제거할 수 있다.
   * @summary 특정 todo의 태그를 제거합니다.
   * @param {string} id
   * @param {string} [tag]
   */
  deleteTag(id, tag) {}
}
